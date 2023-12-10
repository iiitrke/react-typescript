type NetworkLoadingState = {
    state: "loading"
};

type NetworkFailedState = {
    state: "failed";
    code: number;
};

type NetworkSuccessState ={
    state: "success";
    response: {
        title: string;
        duration: number;
        summary: string;
        }

}


type NetworkState = |NetworkLoadingState | NetworkFailedState | NetworkSuccessState;


export default NetworkState;