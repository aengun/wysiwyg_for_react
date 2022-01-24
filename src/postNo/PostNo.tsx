import React, { useEffect, useRef, useState } from "react";
import PostNoRegPop from "./PostNoRegPop";
import usePostNoRegPopup from "./usePostNoRegPopup";

const PostNo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [zipcode, setZipcode] = useState<string>("");
  const [fullAddress, setFullAddress] = useState<string>("");

  const postNoRegPop = usePostNoRegPopup([]);

  const onClickOpen = () => {
    postNoRegPop.setOpen(true);
  };

  useEffect(() => {
    let postNo = postNoRegPop.selectedRows[0];
    let bassAddr = postNoRegPop.selectedRows[1];
    let dtlAddr = postNoRegPop.selectedRows[2];
    console.log(postNo + "/" + bassAddr + "/" + dtlAddr);

    if (postNo !== null) {
      // setBsnmInfo((prevState) => ({ ...prevState, dtlAddr: dtlAddr }));
      // setBsnmInfo((prevState) => ({ ...prevState, zip: postNo }));
      // setBsnmInfo((prevState) => ({ ...prevState, bassAddr: bassAddr }));
    }
  }, [postNoRegPop.selectedRows]);

  return (
    <div className="orderDiv" style={{ background: "#C3E7FA" }}>
      <button onClick={onClickOpen}>클릭</button>
      <div>
        <div>우편번호 : {zipcode}</div>
        <div>주소 : {fullAddress}</div>
      </div>
      <PostNoRegPop
        open={postNoRegPop.open}
        setTransRows={postNoRegPop.setTransRows}
        setOpen={postNoRegPop.setOpen}
        setClose={postNoRegPop.setClose}
      />
    </div>
  );
};

export default PostNo;
