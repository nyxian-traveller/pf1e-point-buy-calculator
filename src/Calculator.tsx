import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Race, Races } from './model/Race';
import { PointBuy, PointBuys } from './model/PointBuy';
import { CostIncrements } from './model/CostIncrement';
import { Button, Col, Form, FormControl, FormLabel, FormSelect, Row } from 'react-bootstrap';
import { Bonuses } from './model/Bonus';

function Calculator () {
    const races: Race[] = useMemo(() => ([ ...Races]), []);
    const pointBuys: PointBuy[] = useMemo(() => ([ ...PointBuys]), []);
    const costs: number[] = useMemo(() => [ ...CostIncrements ], []);
    const bonuses: number[] = useMemo(() => [ ...Bonuses ], []);
    
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
                        <FormLabel column='lg'>Point Level:</FormLabel>
                    </Col>
                    <Col>
                        <FormLabel column='lg' style={{ marginRight: '15px'}}>Total Points:</FormLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormSelect className='form-control' value={maxPoints} onChange={({target: {value}}) => setMaxPoints(parseInt(value))}>
                            {pointBuys.map(x => <option id={`${x.points}-points`} key={`${x.points}-points`} value={x.points}>{`${x.name} - ${x.points} Points`}</option>)}
                        </FormSelect>
                    </Col>
                    <Col style={{ marginTop: '-10px'}}>
                        <FormLabel className='form-label' column='lg' style={totalPoints > maxPoints ? { color: 'red', fontWeight:' bolder'} : {}}>{totalPoints}</FormLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormLabel className='form-label' column='lg'>Race:</FormLabel>
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg' style={{ marginRight: '15px'}}>Notes:</FormLabel>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '30px' }}>
                    <Col>
                        <FormSelect className='form-control' value={racial.key} onChange={({target: {value}}) => setRacial(races.find(x => x.key === value)!)}>
                            {races.map(x => <option id={`${x.key}-points`} key={`${x.key}-points`} value={x.key}>{x.name}</option>)}
                        </FormSelect>
                    </Col>
                    <Col style={{ marginTop: '-10px'}}>
                        <FormLabel className='form-label' column='lg'>{racial.note}</FormLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormLabel className='form-label' column='lg'>Ability</FormLabel>
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg'>Purchased</FormLabel>
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg'>Cost</FormLabel>
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg'>Racial Modifier</FormLabel>
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg'>Final</FormLabel>
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg'>Bonus</FormLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormLabel className='form-label' column='lg'>Strength</FormLabel>
                    </Col>
                    <Col>
                        <FormControl className='form-control' type='number' step={1} min={7} max={18} value={strPoints} onChange={({target: {value}}) => setStrPoints(parseInt(value))} />
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg'>{strCost}</FormLabel>
                    </Col>
                    <Col>
                        <FormControl
                            className='form-control'
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
                        <FormLabel className='form-label' column='lg'>{str}</FormLabel>
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg'>{strBonus}</FormLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormLabel className='form-label' column='lg'>Dexterity</FormLabel>
                    </Col>
                    <Col>
                        <FormControl className='form-control' type='number' step={1} min={7} max={18} value={dexPoints} onChange={({target: {value}}) => setDexPoints(parseInt(value))} />
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg'>{dexCost}</FormLabel>
                    </Col>
                    <Col>
                        <FormControl
                            className='form-control'
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
                        <FormLabel className='form-label' column='lg'>{dex}</FormLabel>
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg'>{dexBonus}</FormLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormLabel className='form-label' column='lg'>Constitution</FormLabel>
                    </Col>
                    <Col>
                        <FormControl className='form-control' type='number' step={1} min={7} max={18} value={conPoints} onChange={({target: {value}}) => setConPoints(parseInt(value))} />
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg'>{conCost}</FormLabel>
                    </Col>
                    <Col>
                        <FormControl
                            className='form-control'
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
                        <FormLabel className='form-label' column='lg'>{con}</FormLabel>
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg'>{conBonus}</FormLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormLabel className='form-label' column='lg'>Intelligence</FormLabel>
                    </Col>
                    <Col>
                        <FormControl className='form-control' type='number' step={1} min={7} max={18} value={intPoints} onChange={({target: {value}}) => setIntPoints(parseInt(value))} />
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg'>{intCost}</FormLabel>
                    </Col>
                    <Col>
                        <FormControl
                            className='form-control'
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
                        <FormLabel className='form-label' column='lg'>{int}</FormLabel>
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg'>{intBonus}</FormLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormLabel className='form-label' column='lg'>Wisdom</FormLabel>
                    </Col>
                    <Col>
                        <FormControl className='form-control' type='number' step={1} min={7} max={18} value={wisPoints} onChange={({target: {value}}) => setWisPoints(parseInt(value))} />
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg'>{wisCost}</FormLabel>
                    </Col>
                    <Col>
                        <FormControl
                            className='form-control'
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
                        <FormLabel className='form-label' column='lg'>{wis}</FormLabel>
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg'>{wisBonus}</FormLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormLabel className='form-label' column='lg'>Charisma</FormLabel>
                    </Col>
                    <Col>
                        <FormControl className='form-control' type='number' step={1} min={7} max={18} value={chaPoints} onChange={({target: {value}}) => setChaPoints(parseInt(value))} />
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg'>{chaCost}</FormLabel>
                    </Col>
                    <Col>
                        <FormControl
                            className='form-control'
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
                        <FormLabel className='form-label' column='lg'>{cha}</FormLabel>
                    </Col>
                    <Col>
                        <FormLabel className='form-label' column='lg'>{chaBonus}</FormLabel>
                    </Col>
                </Row>
                <div style={{ marginTop: '20px' }}>
                    <Button className='col-md-2' style={{ float: 'right' }} onClick={reset}>Reset</Button>
                </div>

            </Form>
        </div>
    )
};

export default Calculator;