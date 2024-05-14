import IndexPage from "../pages/IndexPage/IndexPage";
import SignInPage from "../pages/SignInPage/SignInPage";
export const routes = [
    {
        path: '/index',
        page: IndexPage,
        isShowHeader: false
    },
    {
        path: '/',
        page: SignInPage,
        isShowHeader: false
    },
]