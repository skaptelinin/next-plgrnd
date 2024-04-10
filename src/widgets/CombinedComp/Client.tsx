'use client'
import { useState, FC, ReactElement } from 'react';

export const Client: FC<{ initCount: number, children: ReactElement }> = ({ initCount, children }) => {
    const [count, setCount] = useState<number>(initCount);
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div>
            <div>
                Client part:
                <button onClick={() => setCount(val => ++val)}>
                    {count}
                </button>
            </div>
            <label>
                Toggle server component
                <input
                    type="checkbox"
                    checked={visible}
                    onChange={() => setVisible((val) => !val)}
                />
            </label>
            <div>
                here will be server component
                {visible && children}
            </div>
        </div>
    );
}
