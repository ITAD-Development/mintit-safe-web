import styled from "@emotion/styled";
import { Button } from "./Button";

type AlertProps = {
  message: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  onClose: () => void;
};

const BackContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: 367px;
  height: 175px;
  padding: 0px 24px;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 24px;
  padding-inline: 24px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: flex-end;
`;

const Message = styled.div`
  color: #5f5f5f;
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const Alert: React.FC<AlertProps> = ({
  message,
  onCancel,
  onConfirm,
  onClose,
}) => {
  return (
    <BackContainer>
      <Container>
        <HeaderContainer>
          <img
            src="/images/alert/close-icon.svg"
            alt="alert"
            onClick={onClose}
          />
        </HeaderContainer>
        <Message>{message}</Message>
        <ButtonContainer>
          {onCancel && (
            <Button
              title="취소"
              style={{
                backgroundColor: "#F0F0F0",
              }}
              onClick={onCancel}
            />
          )}
          <Button
            title="확인"
            style={{
              backgroundColor: "#A0F0E0",
            }}
            onClick={onConfirm}
          />
        </ButtonContainer>
      </Container>
    </BackContainer>
  );
};
export default Alert;
