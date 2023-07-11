import { StyledLabel } from './style';

interface IProps {
  label?: string;
  type?: string;
	maxlength?: number;
  width?: number;
  value: { [key: string]: string };
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export default function Label(props: IProps) {
	const {
		label,
		type,
		maxlength,
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
				required
				placeholder={label}
				type={type || 'text'}
				maxLength={maxlength || 100}
				id={objectKey}
				value={objectValue}
				onChange={(e) => setState(e.target.value)}
			/>
		</StyledLabel>
	);
} 