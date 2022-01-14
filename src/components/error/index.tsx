import { theme } from '../../styles/theme';
import { Container } from './style';



const ErrorPage = () => {
    return (
        <Container>
            <div className="items-center mt-10 flex justify-center flex-col-reverse lg:flex-row ">
                <div className="w-full relative pb-12 lg:pb-0 text-center">
                    <h1 className="my-2 text-gray-800 font-bold text-7xl">
                        404
                    </h1>
                    <p className="my-2 text-gray-800 text-xl">Some thing went wrong.
                        <br />
                        Please reload Page or go back Home by pressing the button bellow.</p>
                    <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center  focus:outline-none focus:ring-2 text-white focus:ring-indigo-700 focus:ring-opacity-50" style={{ background: theme.colors.primary }}>Go Home</button>
                </div>
                <div>
                    {/* <img src="https://i.ibb.co/ck1SGFJ/Group.png" /> */}
                </div>
            </div>

        </Container>
    );
}

export default ErrorPage 
