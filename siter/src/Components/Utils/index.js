import { getImagesService } from "../../Services/service";

export const getItems = async (page, size, setSpin, setItems) => {
    try {
      setSpin(true)
      const res = await getImagesService(page, size)
      setItems(res?.data)
      setTimeout(() => setSpin(false), 1000)

    } catch (e) {
      console.log("Error", e);
    }
  }