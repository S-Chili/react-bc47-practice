import { Section } from "components";
import { useMemo } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Stack from '@mui/material/Stack';
import ButtonMui from '@mui/material/Button';

const DepartmentDetails = () => {
  const { departmentId } = useParams();
  const navigate = useNavigate();
  const departments = useSelector(state => state.departments.items)
  const department = useMemo(() => departments.find(item => item.id === departmentId), [departments, departmentId]);

  return (
    department && (
      <>
        <Section title={department.text}>
          <Stack 
             direction={{ xs: 'column', sm: 'row', md: 'column' }}
             spacing={{ xs: 1, sm: 2, md: 4 }}>
            <ButtonMui
             variant="contained" 
             size="small" 
             sx={{width:{xs:'100px', sm: '250px', md: '400px'}, 
             backgroundColor:{xs:'primary.main', sm: 'info.main', md: 'secondary.main'},
             color:'primary.light'
            }}
             onClick={() => navigate('description')}>
              Описание
            </ButtonMui>
            <ButtonMui 
            variant="contained" 
            size="large" 
            sx={{width:{xs:'100px', sm: '250px', md: '400px'}, 
            backgroundColor:{xs:'primary.main', sm: 'info.main', md: 'secondary.main'},
            color:'primary.light'
          }} 
            onClick={() => navigate('history')}>
              История
            </ButtonMui>
          </Stack>
        </Section>
        <Outlet />
      </>
    )
  );
}

export default DepartmentDetails;