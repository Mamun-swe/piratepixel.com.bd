
import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { ChevronDown, Menu, Upload, User } from 'react-feather';
import { Container } from '../container/Index';
import { CustomButton } from '../button/Index'
import { Images } from '../../utils/Images';

export const NavbarGeneral = () => {
    return (
        <div className="navbar-general">
            <Container.Fluid className="bg-white">
                <Container.Row>
                    <Container.Column>
                        <div className="d-flex">

                            {/* Logo containerc */}
                            <div className="logo-contaier">
                                <Link to="/"><img src={Images.Logo} className="img-fluid" alt="Pirate Pixel logo" /></Link>
                            </div>

                            {/* Items container */}
                            <div className="items-container d-none d-lg-block ps-lg-4">
                                <ul>
                                    <li>
                                        <Link to="/photos">Photos</Link>
                                    </li>
                                    <li>
                                        {/* <button className="btn shadow-none">Categories <ChevronDown size={15} /></button> */}
                                        <DropdownButton
                                            variant="white"
                                            className="shadow-none"
                                            title={<span>Categories <ChevronDown size={15} /></span>}
                                        >
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </DropdownButton>
                                    </li>
                                </ul>
                            </div>

                            {/* Links container */}
                            <div className="ms-auto">
                                <div className="d-flex">
                                    <div>
                                        <CustomButton className="btn-gray rounded-circle circle__padding__sm">
                                            <User size={20} />
                                        </CustomButton>
                                    </div>
                                    <div>
                                        <CustomButton
                                            className="btn-success border-0 d-none d-lg-block ms-2"
                                            style={{ fontSize: 14, borderRadius: 25, padding: "6px 20px", marginTop: 2 }}
                                        >
                                            <Upload size={14} /> Upload
                                        </CustomButton>
                                    </div>
                                    <div>
                                        <CustomButton className="btn-gray rounded-circle d-lg-none circle__padding__sm ms-2">
                                            <Menu size={20} />
                                        </CustomButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container.Column>
                </Container.Row>
            </Container.Fluid>
        </div>
    );
};