import { LiveGPSIcon } from "../../../assets/icons/LiveGPSIcon"
import CustomButton from "../../../components/CustomButton";
import { Modal } from "../../../components/Modal"
import { useGeolocation } from "../../../hooks/useGeolocation";

export const DriverDashboardIndex = () => {
  const { isOpen, loading, fetchLocation, setIsOpen } = useGeolocation();

  return (
    <>
     {isOpen && (
        <Modal
          closeModal={() => setIsOpen(false)}
          modalIcon={<LiveGPSIcon />}
          title={"Allow access to your live location"}
          bodyText={
            "Use My Current Location and Auto-fill the search bar with coordinates/nearest landmark"
          }
        >
          <CustomButton
            isLoading={loading}
            name="Allow Access"
            extendedStyles="w-full h-[45px] lg:h-[60px] px-4 font-medium rounded-2xl bg-primary-700 text-white flex items-center justify-center"
            size="lg"
            btnClick={() => fetchLocation()}
          />
        </Modal>
      )}

    </>
  )
}
