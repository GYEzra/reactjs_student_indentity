import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdContentCopy } from "react-icons/md";
import {
    TiSocialFacebook,
    TiSocialTwitter,
    TiSocialInstagram,
} from "react-icons/ti";

import './Form.css';

const Form = () => {
    return (
        <div className="Form">
            <div className="Form_box">
                <form>
                    <div className="Form_box_input">
                        <label htmlFor="name">Tên người dùng</label>
                        <input
                            type="text"
                            placeholder="shoaib bhai"
                            className="Form_box_input_userName"
                        />
                    </div>

                    <div className="Form_box_input">
                        <label htmlFor="email">Email</label>
                        <div className="Form_box_input_box">
                            <div className="Form_box_input_box_icon">
                                <HiOutlineMail />
                            </div>
                            <input type="text" placeholder="Email*" />
                        </div>
                    </div>

                    <div className="Form_box_input">
                        <label htmlFor="description">Mô tả</label>
                        <textarea
                            cols="30"
                            rows="6"
                            placeholder="Viết vài từ về bản thân bạn"
                        ></textarea>
                    </div>

                    <div className="Form_box_input">
                        <label htmlFor="website">Website</label>
                        <div className="Form_box_input_box">
                            <div className="Form_box_input_box_icon">
                                <MdOutlineHttp />
                            </div>
                            <input type="text" placeholder="Website" />
                        </div>
                    </div>

                    <div className="Form_box_input_social">
                        <div className="Form_box_input">
                            <label htmlFor="facebook">Facebook</label>
                            <div className="Form_box_input_box">
                                <div className="Form_box_input_box_icon">
                                    <TiSocialFacebook />
                                </div>
                                <input type="text" placeholder="http://shoaib" />
                            </div>
                        </div>

                        <div className="Form_box_input">
                            <label htmlFor="twitter">Twitter</label>
                            <div className="Form_box_input_box">
                                <div className="Form_box_input_box_icon">
                                    <TiSocialTwitter />
                                </div>
                                <input type="text" placeholder="http://shoaib" />
                            </div>
                        </div>

                        <div className="Form_box_input">
                            <label htmlFor="instagram">Instagram</label>
                            <div className="Form_box_input_box">
                                <div className="Form_box_input_box_icon">
                                    <TiSocialInstagram />
                                </div>
                                <input type="text" placeholder="http://shoaib" />
                            </div>
                        </div>
                    </div>

                    <div className="Form_box_input">
                        <label htmlFor="wallet">Địa chỉ ví</label>
                        <div className="Form_box_input_box">
                            <div className="Form_box_input_box_icon">
                                <MdOutlineHttp />
                            </div>
                            <input type="text" placeholder="0xEA674fd979de3Ed" />
                            <div className="Form_box_input_box_icon">
                                <MdContentCopy />
                            </div>
                        </div>
                    </div>

                    <div className="Form_box_btn">
                        <button
                            className="button"
                            onClick={() => {}}
                        >
                            Upload profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
