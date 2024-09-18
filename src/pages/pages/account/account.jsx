import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import './account.css'; 
import Form from "../../components/AccountPage/Form/Form"; 

const Account = () => {
    const [fileUrl, setFileUrl] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        setFileUrl(URL.createObjectURL(file));
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "image/*",
        maxSize: 5000000,
    });

    return (
        <div className="account"> 
            <div className="account_info">
                <h1>Cài đặt hồ sơ</h1>
                <br/>
                <br/>
                <br/>
                <p>Bạn có thể đặt tên hiển thị ưa thích, tạo hồ sơ của mình</p>
            </div> 

            <div className="account_box">
                <div className="account_box_img" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <img
                        src={fileUrl || "https://imedia.imuzik.com.vn/media1/ckfinder/images/2(261).jpg"}
                        alt="Tải lên tài khoản"
                        width={150}
                        height={150}
                        className="account_box_img_img"
                    />
                    <p className="account_box_img_para">Thay đổi ảnh</p>
                </div> 
                <div className="account_box_form"> 
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default Account;
