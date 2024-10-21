import { answerType }   from '../../models/surveyModel/TypeQuestion';

const Answer: React.FC<answerType> = ({ answer }) => {
    return (
        <div>
            <p style={{
                    display: 'inline',
                    marginLeft: '10px',
                    color: '#666666',
                    fontSize: '16px',
                }
            }>{answer.name}</p>
        </div>
    );
}

export default Answer;