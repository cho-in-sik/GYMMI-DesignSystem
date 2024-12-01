import PrimaryButton from './components/PrimaryButton';

function App() {
  return (
    <>
      <div className="bg-white text-main text-2xl font-body">
        12121221121121212안녕
      </div>
      <div className="w-1/4">
        <PrimaryButton isDisabled={false} theme="activeV1">
          안녕
        </PrimaryButton>
      </div>

      <div className="text-main text-2xl">12121221121121212안녕</div>
    </>
  );
}

export default App;
