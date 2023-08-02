import { useContext, useEffect } from "react";
import Link from "../../src/Link";
import {
  Typography,
  Grid,
  CardContent,
  Divider,
  Button,
  Card,
  Box,
} from "@mui/material";
import { useRouter } from "next/router";

import { CartContext } from "../../context";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import { CartList, OrderSummary } from "../../components/cart";
import { countries } from "../../utils";
import Cookies from "js-cookie";

const SumarryPage = () => {

  const router = useRouter();
  const { shippingAddress, numberOfItems } = useContext(CartContext);

  useEffect(() => {
    if (!Cookies.get("firstName")) {
      router.push("/checkout/address");
    }
  }, [router]);


  if (!shippingAddress) {
    return <></>;
  }

  const { firstName, address, address2='', country, zip, phone, city } =
    shippingAddress;

  return (
    <ShopLayout title="Resumen de orden" pageDescription="Resumen">
      <Typography variant="h1" component="h1">
        {" "}
        Resumen de la Orden{" "}
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">
                Resumen ({numberOfItems}{" "}
                {numberOfItems === 1 ? "producto" : "productos"})
              </Typography>{" "}
              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent={"space-between"}>
                <Typography variant="subtitle1">
                  {" "}
                  Direccion de entrega
                </Typography>
                <Link href="/checkout/address" underline="always">
                  Editar
                </Link>
              </Box>
              <Typography> {firstName} </Typography>
               <Typography>{ address }{ address2 ? `, ${address2}` : ''  } </Typography>
              <Typography>
                {" "}
                {city}, {zip}{" "}
              </Typography>
              <Typography> {country} </Typography>
              <Typography> {phone} </Typography>
              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent={"end"}>
                <Link href="/cart" underline="always">
                  Editar
                </Link>
              </Box>
              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirmar Orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SumarryPage;
