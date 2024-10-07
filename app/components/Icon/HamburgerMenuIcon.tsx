import { CSSProperties } from "react";

interface PropsType {
    style?: CSSProperties;
    color?: string;
    isOpen?: boolean;
}

const HamburgerMenuIcon = (props: PropsType) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill={props.color || "#fff"}
            style={{
                transform: props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)', // isOpen に応じて回転
                transition: 'transform 0.3s', // アニメーションのトランジションを追加
            }}
        >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    );
};

export default HamburgerMenuIcon;