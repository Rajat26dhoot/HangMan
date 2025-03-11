import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";
import { motion } from 'framer-motion';
function StartGame() {
    return (
        <>

        <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mt-24 pb-10"
            >
                <h6 className="text-2xl text-gray-800 font-bold">
                    Add your Word Here!
                </h6>
            </motion.div>
            <TextInputFormContainer />
        </>
    )
}

export default StartGame;