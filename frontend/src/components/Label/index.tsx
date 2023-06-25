import { StyledLabel } from './style';

interface IProps {
  label: string;
  type?: string;
  width?: number;
  value: { [key: string]: string };
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export default function MyLabel(props: IProps) {
	const {
		label,
		type,
		value,
		width,
		setState,
	} = props;

	const objectKey = Object.keys(value)[0];
	const objectValue = value[objectKey];

	return (
		<StyledLabel htmlFor={objectKey} width={width}>
			{label}
			<input
				type={type || 'text'}
				id={objectKey}
				value={objectValue}
				onChange={(e) => setState(e.target.value)}
			/>
		</StyledLabel>
	);
} 