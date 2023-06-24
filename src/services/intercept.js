import fetchIntercept from 'fetch-intercept';

export const callIntercept = () => {
    fetchIntercept.register({
        request: function (url, config) {
            const token = localStorage.getItem('token') || null;

            if (token) {
                config.headers ? config.headers['authorization'] = token : config.headers = { authorization: token };
            }
            return [url, config];
        },

        requestError: function (error) {
            // Called when an error occured during another 'request' interceptor call
            return Promise.reject(error);
        },

        response: function (response) {
            // Modify the reponse object
            return response;
        },

        responseError: function (error) {
            // Handle an fetch error
            return Promise.reject(error);
        }
    });
}