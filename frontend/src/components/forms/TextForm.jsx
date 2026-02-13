
import TextField from '@mui/material/TextField';

export default function TextForm({label,value,name,onChange,onBlur,error,helperText}) {
  return (
            <TextField 
                id="standard-basic" 
                label={label} 
                variant="outlined" 
                sx={{width:"100%"}}
                value={value}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                error={error}
                helperText={helperText}
            />
  );
}
