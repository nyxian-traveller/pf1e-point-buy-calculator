import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiAlertCircle, FiExternalLink } from "react-icons/fi";
import { VscDebugRestart } from "react-icons/vsc";
import { Tooltip } from 'react-tooltip'
import { Button, Col, Form, FormControl, FormSelect, FormText, Row } from 'react-bootstrap';
import { Race, Races } from './model/Race';
import { PointBuy, PointBuys } from './model/PointBuy';
import { CostIncrements } from './model/CostIncrement';
import { Bonuses } from './model/Bonus';

function Calculator () {
    const races: Race[] = useMemo(() => ([ ...Races]), []);
    const pointBuys: PointBuy[] = useMemo(() => ([ ...PointBuys]), []);
    const costs: number[] = useMemo(() => [ ...CostIncrements ], []);
    const bonuses: number[] = useMemo(() => [ ...Bonuses ], []);
    const pointsMin = 7;
    const pointsMax = 18
    const [maxPoints, setMaxPoints] = useState<number>(20);
    const [racial, setRacial] = useState<Race>(Races[0]);
    
    const [str, setStr] = useState<number>(10);
    const [dex, setDex] = useState<number>(10);
    const [con, setCon] = useState<number>(10);
    const [int, setInt] = useState<number>(10);
    const [wis, setWis] = useState<number>(10);
    const [cha, setCha] = useState<number>(10);
    
    const [strPoints, setStrPoints] = useState<number>(10);
    const [dexPoints, setDexPoints] = useState<number>(10);
    const [conPoints, setConPoints] = useState<number>(10);
    const [intPoints, setIntPoints] = useState<number>(10);
    const [wisPoints, setWisPoints] = useState<number>(10);
    const [chaPoints, setChaPoints] = useState<number>(10);
    
    const [strCost, setStrCost] = useState<number>(0);
    const [dexCost, setDexCost] = useState<number>(0);
    const [conCost, setConCost] = useState<number>(0);
    const [intCost, setIntCost] = useState<number>(0);
    const [wisCost, setWisCost] = useState<number>(0);
    const [chaCost, setChaCost] = useState<number>(0);

    const [strRacial, setStrRacial] = useState<number>(0);
    const [dexRacial, setDexRacial] = useState<number>(0);
    const [conRacial, setConRacial] = useState<number>(0);
    const [intRacial, setIntRacial] = useState<number>(0);
    const [wisRacial, setWisRacial] = useState<number>(0);
    const [chaRacial, setChaRacial] = useState<number>(0);
    
    const [strBonus, setStrBonus] = useState<number>(0);
    const [dexBonus, setDexBonus] = useState<number>(0);
    const [conBonus, setConBonus] = useState<number>(0);
    const [intBonus, setIntBonus] = useState<number>(0);
    const [wisBonus, setWisBonus] = useState<number>(0);
    const [chaBonus, setChaBonus] = useState<number>(0);

    const [invalidRacial, setInvalidRacial] = useState<boolean>(true);
    
    const [totalPoints, setTotalPoints] = useState<number>(0);

    useEffect(() => {
        setStrPoints(10);
        setDexPoints(10);
        setConPoints(10);
        setIntPoints(10);
        setWisPoints(10);
        setChaPoints(10);
    } ,[maxPoints]);

    useEffect(() => {
        setStrRacial(racial.str);
        setDexRacial(racial.dex);
        setConRacial(racial.con);
        setIntRacial(racial.int);
        setWisRacial(racial.wis);
        setChaRacial(racial.cha);
    }, [racial]);

    useEffect(() => setStrCost(costs[strPoints]), [strPoints]);
    useEffect(() => setStr(strRacial + strPoints), [strRacial, strPoints]);
    useEffect(() => setStrBonus(bonuses[str]), [str]);
    useEffect(() => {
        if (!racial.addSingleBonus) {
            setInvalidRacial(false);
            return;
        }

        setInvalidRacial(
            (strRacial !== 0 && (dexRacial !== 0 || conRacial !== 0 || intRacial !== 0 || wisRacial !== 0 || chaRacial !== 0))
            || (dexRacial !== 0 && (strRacial !== 0 || conRacial !== 0 || intRacial !== 0 || wisRacial !== 0 || chaRacial !== 0))
            || (conRacial !== 0 && (strRacial !== 0 || dexRacial !== 0 || intRacial !== 0 || wisRacial !== 0 || chaRacial !== 0))
            || (intRacial !== 0 && (strRacial !== 0 || dexRacial !== 0 || conRacial !== 0 || wisRacial !== 0 || chaRacial !== 0))
            || (wisRacial !== 0 && (strRacial !== 0 || dexRacial !== 0 || conRacial !== 0 || intRacial !== 0 || chaRacial !== 0))
            || (chaRacial !== 0 && (strRacial !== 0 || dexRacial !== 0 || conRacial !== 0 || intRacial !== 0 || wisRacial !== 0))
        );
    }, [racial.addSingleBonus, strRacial, dexRacial, conRacial, intRacial, wisRacial, chaRacial]);

    useEffect(() => setDexCost(costs[dexPoints]), [dexPoints]);
    useEffect(() => setDex(dexRacial + dexPoints), [dexRacial, dexPoints]);
    useEffect(() => setDexBonus(bonuses[dex]), [dex]);

    useEffect(() => setConCost(costs[conPoints]), [conPoints]);
    useEffect(() => setCon(conRacial + conPoints), [conRacial, conPoints]);
    useEffect(() => setConBonus(bonuses[con]), [con]);

    useEffect(() => setIntCost(costs[intPoints]), [intPoints]);
    useEffect(() => setInt(intRacial + intPoints), [intRacial, intPoints]);
    useEffect(() => setIntBonus(bonuses[int]), [int]);

    useEffect(() => setWisCost(costs[wisPoints]), [wisPoints]);
    useEffect(() => setWis(wisRacial + wisPoints), [wisRacial, wisPoints]);
    useEffect(() => setWisBonus(bonuses[wis]), [wis]);

    useEffect(() => setChaCost(costs[chaPoints]), [chaPoints]);
    useEffect(() => setCha(chaRacial + chaPoints), [chaRacial, chaPoints]);
    useEffect(() => setChaBonus(bonuses[cha]), [cha]);

    useEffect(() => setTotalPoints(strCost + dexCost + conCost + intCost + wisCost + chaCost), [strCost, dexCost, conCost, intCost, wisCost, chaCost]);

    const reset = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setStrPoints(10);
        setDexPoints(10);
        setConPoints(10);
        setIntPoints(10);
        setWisPoints(10);
        setChaPoints(10);
    }, []);

    return (
        <div>
            <Form>
                <Row>
                    <Col>
                        <div className='buy-text'>Point Level:</div>
                    </Col>
                    <Col>
                        <div className='buy-text margin-right-15'>Total Points:</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormSelect id='max-points-select' className='form-control point-buy-form' value={maxPoints} onChange={({target: {value}}) => setMaxPoints(parseInt(value))}>
                            {pointBuys.map(x => <option id={`${x.points}-points`} key={`${x.points}-points`} value={x.points}>{`${x.name} - ${x.points} Points`}</option>)}
                        </FormSelect>
                    </Col>
                    <Col>
                        <div className={totalPoints > maxPoints ? 'invalid-points' : 'buy-text valid-points'}>
                            {totalPoints}{' '}
                            {totalPoints > maxPoints && 
                                <FiAlertCircle
                                    data-tooltip-id='invalid-point-tooltip'
                                    color='white'
                                    className='margin-top-neg-8'
                                />
                            }
                            <Tooltip
                                id='invalid-point-tooltip'
                                place='right-end'
                                className='buy-tooltip'
                                content={`Total points cannot exceed ${maxPoints} points!`}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='buy-text'>Race:</div>
                    </Col>
                    <Col>
                        <div className='buy-text margin-right-15'>Notes:</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormSelect id='race-selector' className='form-control point-buy-form' value={racial.key} onChange={({target: {value}}) => setRacial(races.find(x => x.key === value)!)}>
                            {races.map(x => <option id={`${x.key}-points`} key={`${x.key}-points`} value={x.key}>{x.name}</option>)}
                        </FormSelect>
                    </Col>
                    <Col>
                        <div className='buy-text'>{racial.note}</div>
                    </Col>
                </Row>
                <Row className='margin-bottom-30'>
                    <Col>
                        <Row className='margin-top-neg-10'>
                            <Col>
                                <FormText>
                                    <a href={racial.d20SiteLink} target="_blank" rel="noopener noreferrer">d20pfsrd Link</a> <FiExternalLink color='white'/>
                                </FormText>
                            </Col>
                            <Col>
                                <FormText>
                                    <a href={racial.archivesOfNethysLink} target="_blank" rel="noopener noreferrer">Archives Of Nethys Link</a> <FiExternalLink color='white'/>
                                </FormText>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row className='buy-row-header'>
                    <Col>
                        <div className='buy-text buy-form-label'>Ability</div>
                    </Col>
                    <Col>
                        <div className='buy-text buy-form-label'>Purchased</div>
                    </Col>
                    <Col>
                        <div className='buy-text buy-form-label'>Cost</div>
                    </Col>
                    <Col>
                        <div className='buy-text buy-form-label'>Racial Modifier</div>
                    </Col>
                    <Col>
                        <div className='buy-text buy-form-label'>Final</div>
                    </Col>
                    <Col>
                        <div className='buy-text buy-form-label'>Bonus</div>
                    </Col>
                </Row>
                <Row className='buy-row-even'>
                    <Col>
                        <div className='buy-text margin-left-15'>Strength</div>
                    </Col>
                    <Col>
                        <FormControl id='str-buy' className='form-control point-buy-form' type='number' step={1} min={pointsMin} max={pointsMax} value={strPoints} onChange={({target: {value}}) => setStrPoints(parseInt(value))} />
                    </Col>
                    <Col>
                        <div className='buy-text margin-left-15'>{strCost}</div>
                    </Col>
                    <Col>
                        <FormControl
                            id='str-race-mod'
                            className='form-control point-buy-form'
                            type='number'
                            step={2}
                            min={racial.custom ? -6 : racial.addSingleBonus ? 0 : 4}
                            max={racial.custom ? 6 : racial.addSingleBonus ? 2 : 4}
                            value={strRacial}
                            onChange={({target: {value}}) => setStrRacial(parseInt(value))}
                            isInvalid={invalidRacial}
                            disabled={!racial.custom && !racial.addSingleBonus} 
                        />
                    </Col>
                    <Col>
                        <div className='buy-text buy-stat-total'>{str}</div>
                    </Col>
                    <Col>
                        <div className='buy-text margin-left-15'>{strBonus < 0 ? '' : '+'}{strBonus}</div>
                    </Col>
                </Row>
                <Row className='buy-row-odd'>
                    <Col>
                        <div className='buy-text margin-left-15'>Dexterity</div>
                    </Col>
                    <Col>
                        <FormControl id='dex-buy' className='form-control point-buy-form' type='number' step={1} min={pointsMin} max={pointsMax} value={dexPoints} onChange={({target: {value}}) => setDexPoints(parseInt(value))} />
                    </Col>
                    <Col>
                        <div className='buy-text margin-left-15'>{dexCost}</div>
                    </Col>
                    <Col>
                        <FormControl
                            id='dex-race-mod'
                            className='form-control point-buy-form'
                            type='number'
                            step={2}
                            min={racial.custom ? -6 : racial.addSingleBonus ? 0 : 4}
                            max={racial.custom ? 6 : racial.addSingleBonus ? 2 : 4}
                            value={dexRacial}
                            onChange={({target: {value}}) => setDexRacial(parseInt(value))}
                            isInvalid={invalidRacial}
                            disabled={!racial.custom && !racial.addSingleBonus}
                        />
                    </Col>
                    <Col>
                        <div className='buy-text buy-stat-total'>{dex}</div>
                    </Col>
                    <Col>
                        <div className='buy-text margin-left-15'>{dexBonus < 0 ? '' : '+'}{dexBonus}</div>
                    </Col>
                </Row>
                <Row className='buy-row-even'>
                    <Col>
                        <div className='buy-text margin-left-15'>Constitution</div>
                    </Col>
                    <Col>
                        <FormControl id='con-buy' className='form-control point-buy-form' type='number' step={1} min={pointsMin} max={pointsMax} value={conPoints} onChange={({target: {value}}) => setConPoints(parseInt(value))} />
                    </Col>
                    <Col>
                        <div className='buy-text margin-left-15'>{conCost}</div>
                    </Col>
                    <Col>
                        <FormControl
                            id='con-race-mod'
                            className='form-control point-buy-form'
                            type='number'
                            step={2}
                            min={racial.custom ? -6 : racial.addSingleBonus ? 0 : 4}
                            max={racial.custom ? 6 : racial.addSingleBonus ? 2 : 4}
                            value={conRacial}
                            onChange={({target: {value}}) => setConRacial(parseInt(value))}
                            isInvalid={invalidRacial}
                            disabled={!racial.custom && !racial.addSingleBonus}
                        />
                    </Col>
                    <Col>
                        <div className='buy-text buy-stat-total'>{con}</div>
                    </Col>
                    <Col>
                        <div className='buy-text margin-left-15'>{conBonus < 0 ? '' : '+'}{conBonus}</div>
                    </Col>
                </Row>
                <Row className='buy-row-odd'>
                    <Col>
                        <div className='buy-text margin-left-15'>Intelligence</div>
                    </Col>
                    <Col>
                        <FormControl id='int-buy' className='form-control point-buy-form' type='number' step={1} min={pointsMin} max={pointsMax} value={intPoints} onChange={({target: {value}}) => setIntPoints(parseInt(value))} />
                    </Col>
                    <Col>
                        <div className='buy-text margin-left-15'>{intCost}</div>
                    </Col>
                    <Col>
                        <FormControl
                            id='int-race-mod'
                            className='form-control point-buy-form'
                            type='number'
                            step={2}
                            min={racial.custom ? -6 : racial.addSingleBonus ? 0 : 4}
                            max={racial.custom ? 6 : racial.addSingleBonus ? 2 : 4}
                            value={intRacial}
                            onChange={({target: {value}}) => setIntRacial(parseInt(value))}
                            isInvalid={invalidRacial}
                            disabled={!racial.custom && !racial.addSingleBonus}
                        />
                    </Col>
                    <Col>
                        <div className='buy-text buy-stat-total'>{int}</div>
                    </Col>
                    <Col>
                        <div className='buy-text margin-left-15'>{intBonus < 0 ? '' : '+'}{intBonus}</div>
                    </Col>
                </Row>
                <Row className='buy-row-even'>
                    <Col>
                        <div className='buy-text margin-left-15'>Wisdom</div>
                    </Col>
                    <Col>
                        <FormControl id='wis-buy' className='form-control point-buy-form' type='number' step={1} min={pointsMin} max={pointsMax} value={wisPoints} onChange={({target: {value}}) => setWisPoints(parseInt(value))} />
                    </Col>
                    <Col>
                        <div className='buy-text margin-left-15'>{wisCost}</div>
                    </Col>
                    <Col>
                        <FormControl
                            id='wis-race-mod'
                            className='form-control point-buy-form'
                            type='number'
                            step={2}
                            min={racial.custom ? -6 : racial.addSingleBonus ? 0 : 4}
                            max={racial.custom ? 6 : racial.addSingleBonus ? 2 : 4}
                            value={wisRacial}
                            onChange={({target: {value}}) => setWisRacial(parseInt(value))}
                            isInvalid={invalidRacial}
                            disabled={!racial.custom && !racial.addSingleBonus} 
                        />
                    </Col>
                    <Col>
                        <div className='buy-text buy-stat-total'>{wis}</div>
                    </Col>
                    <Col>
                        <div className='buy-text margin-left-15'>{wisBonus < 0 ? '' : '+'}{wisBonus}</div>
                    </Col>
                </Row>
                <Row className='buy-row-odd'>
                    <Col>
                        <div className='buy-text margin-left-15'>Charisma</div>
                    </Col>
                    <Col>
                        <FormControl id='cha-buy' className='form-control point-buy-form' type='number' step={1} min={pointsMin} max={pointsMax} value={chaPoints} onChange={({target: {value}}) => setChaPoints(parseInt(value))} />
                    </Col>
                    <Col>
                        <div className='buy-text margin-left-15'>{chaCost}</div>
                    </Col>
                    <Col>
                        <FormControl
                            id='cha-race-mod'
                            className='form-control point-buy-form'
                            type='number'
                            step={2}
                            min={racial.custom ? -6 : racial.addSingleBonus ? 0 : 4}
                            max={racial.custom ? 6 : racial.addSingleBonus ? 2 : 4}
                            value={chaRacial}
                            onChange={({target: {value}}) => setChaRacial(parseInt(value))}
                            isInvalid={invalidRacial}
                            disabled={!racial.custom && !racial.addSingleBonus} 
                        />
                    </Col>
                    <Col>
                        <div className='buy-text buy-stat-total'>{cha}</div>
                    </Col>
                    <Col>
                        <div className='buy-text margin-left-15'>{chaBonus < 0 ? '' : '+'}{chaBonus}</div>
                    </Col>
                </Row>
                <div className='margin-top-20'>
                    <Button className='buy-reset' onClick={reset}>Reset <VscDebugRestart /></Button>
                </div>

            </Form>
        </div>
    )
};

export default Calculator;