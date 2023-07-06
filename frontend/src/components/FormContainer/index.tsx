import { Button } from '../../styles/Button';
import { Container } from './style';

interface IProps {
  title: string;
  icon: React.ReactNode;
  handleClick: () => unknown;
  buttonText: string;
  isDisabled: boolean;
  children: React.ReactNode;
}

export default function FormContainer (props: IProps) {
	const {
		title,
		icon,
		handleClick,
		isDisabled,
		buttonText,
		children
	} = props;

	return ([
		<Container>
			<h3>{icon} {title}</h3>

			{children}

			<Button
				width={'160px'}
				type="button"
				onClick={handleClick}
				disabled={isDisabled}
			>
				{buttonText}
			</Button>
		</Container>
	]);
}