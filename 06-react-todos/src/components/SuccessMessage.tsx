import Alert from "react-bootstrap/Alert";

interface SuccessMessageProps {
	children: React.ReactNode;
	heading?: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ children, heading }) => {
	return (
		<Alert variant="success">
			{heading && <Alert.Heading>{heading}</Alert.Heading>}
			{children}
		</Alert>
	)
}

export default SuccessMessage;
