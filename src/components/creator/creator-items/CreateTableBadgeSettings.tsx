import * as React from 'react';

import {connect, ConnectedProps} from 'react-redux'

import styled from "styled-components";

import {IGroup} from "../../../store/IStore";
import {Form, Formik} from "formik";
import {setTeamsCount} from "../../../store/reducers/actions";

const CreateTableBadgeSettings: React.FC<IGroup & PropsFromRedux> = ({setTeamsCount, ...group}) => {

    const InitialValues = {teamsCount: group.teamsCount, teamsToPlayOff: group.teamsGoToPlayOff}

    return (
        <div className='list-group-item align-items-xl-start'>
            <Formik
                initialValues={InitialValues}

                onSubmit={(values, actions) => {
                    setTeamsCount(group.groupId, values.teamsCount, values.teamsToPlayOff)
                }}

                render={({errors, touched, values, handleChange, handleBlur}) => (
                    <Form>
                        {(errors.teamsCount && touched.teamsCount) &&
                        <>
                            <span>{errors.teamsCount}</span><br/>
                        </>
                        }
                        <p className="text-left">Teams count:</p>
                        <input type='number' min='3' max='32' name="teamsCount"
                               value={values.teamsCount} onChange={handleChange} onBlur={handleBlur}
                        />
                        <p className="text-left">To play off:</p>
                        <input type='number' min='1' max={values.teamsCount} name="teamsToPlayOff"
                               value={values.teamsToPlayOff} onChange={handleChange} onBlur={handleBlur}
                        />
                        <button>OK</button>
                    </Form>
                )}
            />
        </div>
    )
}

const connector =  connect(null, {setTeamsCount})

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(CreateTableBadgeSettings)
