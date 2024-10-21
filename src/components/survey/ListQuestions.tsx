import { listQuestionsType } from "../../models";
import { Question } from "@components";
import Container from '@mui/material/Container';

const ListQuestions: React.FC<listQuestionsType> = ({ questions }) => {

    console.log(questions)
    return (
        <Container disableGutters sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 7,
            width: '100%',
            padding: "30px 70px 30px 70px",
        }}>
            {questions?.map((questions, index) => (
                <div key={index}>
                    <Question question={questions} />
                </div>
            ))}
        </Container>
    );
}

export default ListQuestions;