import { NavbarItem } from '../../config/itemNavbarData'
import * as React from "react";
import { NavLink } from "react-router-dom";
import  Button  from '@mui/material/Button';

export interface ItemsNavbarProps {
    items: NavbarItem[];
}

const ItemsNavbar: React.FC<ItemsNavbarProps> = ({ items }) => {
    return (
        <>
            {items?.map((item: NavbarItem) => (
                <Button
                    key={item.label}
                    component={NavLink}
                    to={item.href}
                    className="text-white text-sm font-semibold hover:text-gray-300"
                >
                    {item.label}
                </Button>
            ))}
        </>

    );
}

export default ItemsNavbar;