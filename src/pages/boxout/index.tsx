import axios from "axios";

const BoxOut = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      <h2>{data.activity.status}</h2>
    </div>
  );
};

export default BoxOut;

export const getServerSideProps = async () => {
  const headerInfo = {
    "X-Shop-Domain": "1-2525131380",
    "X-Division-Account-Id": "1-2525131380",
  };
  const { data } = await axios.get(
    "https://api-stage.boxouthealth.io/v1/orderstatus?orderid=NX01-1231231",
    {
      headers: {
        ...headerInfo,
        "x-api-key": "HF0BVxYyuN1mK3O16hnAN4DSyxyFwVKTCHjOUnJ4",
        "Content-Type": "application/json",
      },
    },
  );
  return {
    props: {
      data,
    },
  };
};
