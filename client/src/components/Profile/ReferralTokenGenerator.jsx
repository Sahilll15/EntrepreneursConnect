import React, { useEffect, useState } from 'react';
import { Button, Input, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { getRefrealsToken, fetchReferalToken } from '../../redux/referals/referalActions';
import { useDispatch, useSelector } from 'react-redux';


const url = 'https://entrepreneursconnect.vercel.app'
const ReferralTokenGenerator = () => {
    const dispatch = useDispatch();
    const [referralToken, setReferralToken] = useState('');
    const [copied, setCopied] = useState(false);
    const [userName, setUserName] = useState('');

    const refrealTokenLoading = useSelector((state) => state?.referal?.refrealTokenLoading)
    const referalCode = useSelector((state) => state?.referal?.referalCode)
    const generateReferralToken = () => {
        const uuid = uuidv4()
        const shortId = uuid.replace(/-/g, '').substring(0, 10)
        const token = `${userName}-ref-${shortId}`;
        const copy = `${url}/${userName}-ref-${shortId}`;
        dispatch(getRefrealsToken(token))
        setReferralToken(copy);
        setCopied(false);
    };

    const copyToClipboard = () => {
        const input = document.createElement('input');
        input.value = referralToken;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        setCopied(true);
        message.success('Referral token copied to clipboard');
    };

    useEffect(() => {
        dispatch(fetchReferalToken())
    }, [dispatch])

    const formdattedReferalCode = `${url}/${referalCode}`

    return (
        <div className='border border-gray-300 p-4 rounded-lg'>
            <h4 className='underline  mb-2'>Existing Refreals</h4>
            <Input
                readOnly
                value={referalCode ? formdattedReferalCode : 'Loading...'}
                addonAfter={
                    <Button icon={<CopyOutlined />} onClick={copyToClipboard} disabled={copied}>
                        Copy
                    </Button>
                }
            />

            <h4 className='text-black  mt-2 underline'>Generate New Referral</h4>
            <p>
                Share your referral link with friends to earn points. Each friend who registers using your link will earn you
                points.
            </p>

            <br />
            <h3>Your Referral Link</h3>
            <Input
                readOnly
                value={refrealTokenLoading ? 'Loading...' : referralToken}
                addonAfter={
                    <Button icon={<CopyOutlined />} onClick={copyToClipboard} disabled={copied}>
                        Copy
                    </Button>
                }
            />
            <br />
            <br />
            <h3>Generate Personalized Referral Token</h3>
            <Input
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{ marginRight: '10px' }}
            />
            <Button type="button" className='bg-blue-400 hover:bg-blue-500 mt-4' onClick={generateReferralToken}>
                Generate Token
            </Button>
        </div>
    );
};

export default ReferralTokenGenerator;
