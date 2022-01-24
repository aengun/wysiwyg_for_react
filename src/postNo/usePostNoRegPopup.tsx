import { useCallback, useEffect, useState } from "react";
import { PostNoRegPopupProps } from ".";

interface postNoProp {
  postNo?: number;
  bassAddr?: string;
  dtlAddr?: string;
}

const usePostNoRegPopup = (props: any): PostNoRegPopupProps => {
  const [open, setOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const [transData, setTransData] = useState<postNoProp[]>([]);
  const [dataLength, setDataLength] = useState();

  const setTransRows = useCallback((data: any) => {
    setTransData([]);
    setDataLength(data.length);

    setTransData((address: postNoProp[]) => [...address, ...data]);
  }, []);

  const setClose = () => {
    setOpen(false);
  };

  const rtnVal: PostNoRegPopupProps = {
    open: open,
    setTransRows: setTransRows,
    selectedRows: selectedRows,
    setOpen: setOpen,
    setClose: setClose,
  };

  useEffect(() => {
    if (transData.length > 1) {
      let tmpData: any = transData;
      setSelectedRows(tmpData);
    }
  }, [transData]);

  return rtnVal;
};
export default usePostNoRegPopup;
