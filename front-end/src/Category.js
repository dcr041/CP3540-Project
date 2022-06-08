import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

export default function Category({ category, size, onSelect }) {

    return (
        <>
            <Card className={`card--bg-${category.color}`} onClick={() => onSelect(category)}>
                <Card.Body
                    className={classNames('text-center', {
                        'd-flex align-items-center justify-content-center p-2': size === 'sm',
                    })}
                >
                    <FontAwesomeIcon icon={category.icon} size="3x" />
                    <h3 className={classNames('mt-2 mb-0', { 'ms-3': size === 'sm' })}>
                        {category.name}
                    </h3>
                </Card.Body>
            </Card>
            </>
    );
}
