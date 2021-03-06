import FlexVCenter from "@/components/_common/flexboxes/FlexVCenter";
import { useLogoutAndPushIndex } from "@/hooks/domain/auth/useLogout";
import useAuthStore from "@/hooks/zustand/domain/auth/useAuthStore";
import { Button, Typography } from "@mui/material";
import React from "react";
import S from "./Navbar.styles";

const Navbar = () => {
  const { authUser } = useAuthStore();
  const logout = useLogoutAndPushIndex();
  return (
    <S.AppBarRoot
      position="fixed"
      elevation={0}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <S.NavbarToolbar>
        <FlexVCenter>
          <Typography>Ideameter</Typography>
        </FlexVCenter>

        <FlexVCenter sx={{ gap: 2 }}>
          <Typography>{authUser?.username}</Typography>
          <Button onClick={logout}>Logout</Button>
        </FlexVCenter>
      </S.NavbarToolbar>
    </S.AppBarRoot>
  );
};

export default Navbar;
