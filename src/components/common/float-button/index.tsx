import { Box, Flex } from "@chakra-ui/react";
import "./styles.css";

export default function FloatButton(props: IFloatButton) {
  const { buttonList, active } = props;
  return (
    <Flex padding="10px 20px" gap={3} position="fixed" bottom="5vh" left="50%" className="float-button-container">
      {buttonList.map((btn) => (
        <button className={`float-button ${btn.name === active && "active"}`} onClick={btn.action}>
          {btn.children}
        </button>
      ))}
    </Flex>
  );
}
