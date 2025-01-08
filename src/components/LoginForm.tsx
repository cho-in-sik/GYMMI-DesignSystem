import { useState } from 'react';
import PrimaryButton from './PrimaryButton';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="text"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          data-testid="email"
        />
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          data-testid="password"
        />
      </div>

      <PrimaryButton theme="activeV1" isDisabled={!email || !password}>
        로그인
      </PrimaryButton>
    </div>
  );
}
