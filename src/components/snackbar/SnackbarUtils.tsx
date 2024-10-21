import {ProviderContext, useSnackbar} from "notistack";

type SnackbarVariant = "default" | "success" | "error" | "warning" | "info";

let useSnackbarRef: ProviderContext;

export const SnackbarUtilsConfigurator = () => {
    useSnackbarRef = useSnackbar();
    return null;
};

export const SnackbarUtils = {
    success: (message: string) => {
        SnackbarUtils.toast(message, "success");
    },
    error: (message: string) => {
        SnackbarUtils.toast(message, "error");
    },
    warning: (message: string) => {
        SnackbarUtils.toast(message, "warning");
    },
    info: (message: string) => {
        SnackbarUtils.toast(message, "info");
    },
    toast(msg: string, variant: SnackbarVariant = "default" ) {
        useSnackbarRef.enqueueSnackbar(msg, { variant });
    }
};
