import Alert from "Components/views/Private/BackOffice/components/Alert";
import { useEffect, useState } from "react";
import { api } from "Services/axiosService";


export const useAbout = () => {
  const [info, setInfo] = useState({
    longDescription: ''
  });

  useEffect(() => {
    api('/organization')
    .then(res => {
      const {data} = res.data;
      setInfo({
        longDescription: data.long_description,
      });
    })
    .catch(() => {
      Alert({ icon: 'error', title: 'Ha ocurrido un error'});
    });
  }, []);

  return info
}