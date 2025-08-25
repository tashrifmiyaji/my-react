import { App } from "./app";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const CurrencyConverterWithReactQuery = () => {
    const queryClient = new QueryClient()

    return(
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    )
}