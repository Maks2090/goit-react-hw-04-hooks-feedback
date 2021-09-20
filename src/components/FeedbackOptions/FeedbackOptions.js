import PropTypes from 'prop-types';
import css from "../FeedbackOptions/FeedbackOptions.module.css";

export default function FeedbackOptions({ onLeaveFeedback, options }) {
    const keyObject = Object.keys(options);
    return (
        <>
            <ul className={css.list}>
                {keyObject.map((nameButton, key) => (
                    <li className={css.item} key={key}>
                        <button className={css.button}
                            type="button"
                            onClick={() => onLeaveFeedback(nameButton)}
                        >
                            {nameButton}
                        </button>
                    </li>
                ))
                }
            </ul>

        </>
    )
}


FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
}