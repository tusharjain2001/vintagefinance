import React from "react";
import { Helmet } from "react-helmet";
import DsaComponent from "../../components/DsaComponent/DsaComponent";

const Dsa = ({ setToast, open }) => {
  return (
    <div>
      <Helmet>
        <title>Vintage Finance</title>
      </Helmet>
      <DsaComponent setToast={setToast} open={open} />
    </div>
  );
};

export default Dsa;
