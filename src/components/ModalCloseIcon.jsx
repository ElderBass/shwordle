import React from 'react';
import * as ModalActions from '../store/actions/modal';
import { useGameContext } from '../store/GameState';

function ModalCloseIcon({ className }) {
    const [state, dispatch] = useGameContext();

    const onClick = () => dispatch(ModalActions.toggleShowStatsModal(false));

    return (
        <button onClick={onClick} className={className}>
            X
        </button>
    );
}

export default ModalCloseIcon;