import React, { ChangeEvent, useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { PostNoRegPopupProps } from ".";
import "../style.css";

const PostNoRegPop = React.memo((props: PostNoRegPopupProps) => {
  const [address, setAddress] = useState<String>("");
  const [zoneCode, setZoneCode] = useState<String>("");
  const [dtlAddress, setDtlAddress] = useState<String>("");
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (!check) return;
    onClose();
  }, [check]);

  const onClickClose = () => {
    props.setOpen(false);
  };

  const handlecomplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.adddressType === "R") {
      if (data.bname !== "") extraAddress += data.bname;
      if (data.buildingName !== "")
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      fullAddress += extraAddress !== "" ? `(${extraAddress})` : "";
    }

    setZoneCode(data.zonecode);
    setAddress(fullAddress);
    setCheck(true);
    console.log(data);
    // onClose();
  };

  const onClose = () => {
    const rtnVal: any = [zoneCode, address, dtlAddress];
    console.log(rtnVal);
    props.setTransRows(rtnVal);
    props.setOpen(false);
    setZoneCode("");
    setAddress("");
    setDtlAddress("");
    setCheck(false);
  };

  return (
    <>
      {props.open ? (
        <div className="orderDiv">
          <div className="m-popup" style={{ display: "block" }}>
            <main className="m-popup__header">
              <header className="m-header">
                <div className="m-header__title">주소 검색</div>
                <button className="m-popup__close" onClick={onClickClose}>
                  Close
                </button>
              </header>
              <div className="m-popup__contents">
                <div className="m-popup__content">
                  <DaumPostcode
                    style={{ border: "1px solid black" }}
                    onComplete={handlecomplete}
                    height={500}
                  />
                </div>
              </div>
            </main>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
});

export default PostNoRegPop;
