import { Navigate, Outlet, useParams } from "react-router";
import css from "./DetailsPage.module.css";
import FeaturesSection from "./FeaturesSection";
import ReviewsSection from "./ReviewsSection";
import { useGetCamperByIdQuery } from "../../redux/api/campers";
import Gallery from "../../components/Gallery";
import Tabs from "../../components/Tabs";
import BookingForm from "../../components/BookingForm";
import CamperMeta from "../../components/CamperMeta";
import type { Camper } from "../../types/camper";
import Notice from "../../components/Notice";
import { Suspense } from "react";
import Loading from "../../components/Loading";

interface DetalsProps {
  camper: Camper;
}

const Details: React.FC<DetalsProps> = ({ camper }) => {
  const images = camper.gallery || [];
  return (
    <>
      <h1 className={css.dp_09}>{camper.name}</h1>
      <div className={css.dp_03}>
        <CamperMeta
          rating={camper.rating}
          reviewsCount={camper.reviews.length}
          location={camper.location}
        />
      </div>
      <div className={css.dp_07}>€{camper.price.toFixed(0)}</div>
      {images.length > 0 ? (
        <Gallery images={camper.gallery || []} />
      ) : (
        <Notice type="info" className={css.dp_04}>
          This camper is shy and didn’t want its photo taken
        </Notice>
      )}
      <p className={css.dp_02}>{camper.description}</p>
      <div>
        <Tabs
          tabs={[
            { label: "Features", to: "", options: { replace: true } },
            { label: "Reviews", to: "reviews", options: { replace: true } },
          ]}
        />
        <div className={css.dp_08}>
          <div className={css.dp_05}>
            <Suspense fallback={<Loading />}>
              <Outlet context={camper} />
            </Suspense>
          </div>
          <BookingForm />
        </div>
      </div>
    </>
  );
};

const DetailsPage = () => {
  const { id } = useParams();
  const { data: camper, error, isLoading } = useGetCamperByIdQuery(id!);
  if (error) {
    return <Navigate to="/error" />;
  }
  return (
    <div className={css.dp_01}>
      {isLoading ? <Loading /> : <Details camper={camper!} />}
    </div>
  );
};

export default DetailsPage;
export { FeaturesSection, ReviewsSection };
