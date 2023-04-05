import { Button, Section } from "components";
import { useMemo } from "react";
import { Outlet, useParams,useNavigate } from "react-router-dom";


const DepartmentDetails = ({departments}) => {
    const { departmentId } = useParams();
    const navigate = useNavigate();

    const department = useMemo(() => departments.find(item => item.id === departmentId))
    return (
      department && (
        <>
          <Section title={department.text}>
            <Button text={'Описание'} action={() => navigate('description')} />
            <Button text={'История'} action={() => navigate("history")} />
          </Section>
          <Outlet />
        </>
      )
    );
}

export default DepartmentDetails;