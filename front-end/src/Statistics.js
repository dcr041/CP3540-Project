export default function Statistics({ countCorrectAnswers }) {
    return (
        <>
            <p>
                You got <strong>{countCorrectAnswers}</strong> correct!
            </p>
            <p>Thank you for playing!</p>
        </>
    );
}
