import { Container, Box, Button, IconButton } from "@material-ui/core";
import React from "react";
import Logo from "../Logo"
import Link from "next/link";
import { ArrowBack } from "@material-ui/icons";

type TProps = {
  isContact?: boolean
}

const Header = ({ isContact }: TProps) => {
  return (
    <header>
      <nav>
        <Container>
          <Box display="flex" justifyContent="space-between" mt={4} mb={4} alignItems="center">
            <Logo />
            {!isContact ? (
              <Box>
                <Link href="/contact" passHref>
                  <Button size="large" variant="contained" color="primary">
                    Contact
                  </Button>
                </Link>
              </Box>
            ) : (
              <Link href="/" passHref>
                <IconButton color="primary">
                  <ArrowBack />
                </IconButton>
              </Link>
            )}
          </Box>
        </Container>
      </nav>
    </header>
  )
}

export default Header;