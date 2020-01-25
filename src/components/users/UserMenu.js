import * as React from "react";
import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";

export const UserMenu = (props) => (
    <Menu className={props.className}>
        {console.log('props', props)}
        {props.SignedIn ? <MenuItem text="New" icon="document" /> : console.log('SignedIn', props.SignedIn) }
        {props.SignedIn ? <MenuItem text="Open" icon="folder-shared" /> : null }
        {props.SignedIn ? <MenuItem text="Close" icon="add-to-folder" /> : null}
        {props.SignedIn ? <MenuDivider /> : null }
        <MenuItem text={props.DarkMode ? "Night Mode" : "Light Mode"} icon="moon" {...props} />
        <MenuDivider />
        <MenuItem text="Sign Out" icon="log-out" {...props} />
    </Menu>
);