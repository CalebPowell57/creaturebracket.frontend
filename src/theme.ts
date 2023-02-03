import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface TypographyVariantsOptions {
        detail?: React.CSSProperties;
        detailKey?: React.CSSProperties;
        smallDetail?: React.CSSProperties;
        smallDetailKey?: React.CSSProperties;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        detail: true;
        detailKey: true;
        smallDetail: true;
        smallDetailKey: true;
    }
}

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#0076C4" },
    },
    typography: {
        detail: {
            fontWeight: "normal",
        },
        detailKey: {
            fontWeight: "bold",
        },
        smallDetail: {
            fontSize: 12,
        },
        smallDetailKey: {
            fontWeight: "bold",
            fontSize: 12,
        },
        htmlFontSize: 16,
        fontFamily: "Segoe UI",
    },
});

export default darkTheme;
