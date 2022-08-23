/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export declare namespace GovernanceMessage {
  export type CallStruct = {
    to: PromiseOrValue<BytesLike>;
    data: PromiseOrValue<BytesLike>;
  };

  export type CallStructOutput = [string, string] & {
    to: string;
    data: string;
  };
}

export interface GovernanceRouterInterface extends utils.Interface {
  functions: {
    "VERSION()": FunctionFragment;
    "domains(uint256)": FunctionFragment;
    "executeCallBatch((bytes32,bytes)[])": FunctionFragment;
    "executeGovernanceActions((bytes32,bytes)[],uint32[],tuple[][])": FunctionFragment;
    "exitRecovery()": FunctionFragment;
    "governor()": FunctionFragment;
    "governorDomain()": FunctionFragment;
    "handle(uint32,uint32,bytes32,bytes)": FunctionFragment;
    "inRecovery()": FunctionFragment;
    "inboundCallBatches(bytes32)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "initiateRecoveryTimelock()": FunctionFragment;
    "localDomain()": FunctionFragment;
    "recoveryActiveAt()": FunctionFragment;
    "recoveryManager()": FunctionFragment;
    "recoveryTimelock()": FunctionFragment;
    "routers(uint32)": FunctionFragment;
    "setRouterGlobal(uint32,bytes32)": FunctionFragment;
    "setRouterLocal(uint32,bytes32)": FunctionFragment;
    "setXAppConnectionManager(address)": FunctionFragment;
    "transferGovernor(uint32,address)": FunctionFragment;
    "transferRecoveryManager(address)": FunctionFragment;
    "xAppConnectionManager()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "VERSION"
      | "domains"
      | "executeCallBatch"
      | "executeGovernanceActions"
      | "exitRecovery"
      | "governor"
      | "governorDomain"
      | "handle"
      | "inRecovery"
      | "inboundCallBatches"
      | "initialize"
      | "initiateRecoveryTimelock"
      | "localDomain"
      | "recoveryActiveAt"
      | "recoveryManager"
      | "recoveryTimelock"
      | "routers"
      | "setRouterGlobal"
      | "setRouterLocal"
      | "setXAppConnectionManager"
      | "transferGovernor"
      | "transferRecoveryManager"
      | "xAppConnectionManager"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "domains",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeCallBatch",
    values: [GovernanceMessage.CallStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "executeGovernanceActions",
    values: [
      GovernanceMessage.CallStruct[],
      PromiseOrValue<BigNumberish>[],
      GovernanceMessage.CallStruct[][]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exitRecovery",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "governorDomain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "handle",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "inRecovery",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "inboundCallBatches",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initiateRecoveryTimelock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "localDomain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recoveryActiveAt",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recoveryManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recoveryTimelock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "routers",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRouterGlobal",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRouterLocal",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setXAppConnectionManager",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferGovernor",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferRecoveryManager",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "xAppConnectionManager",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "domains", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeCallBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeGovernanceActions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exitRecovery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "governorDomain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "handle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "inRecovery", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "inboundCallBatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initiateRecoveryTimelock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "localDomain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoveryActiveAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoveryManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoveryTimelock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "routers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRouterGlobal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRouterLocal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setXAppConnectionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferRecoveryManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "xAppConnectionManager",
    data: BytesLike
  ): Result;

  events: {
    "BatchExecuted(bytes32)": EventFragment;
    "BatchReceived(bytes32)": EventFragment;
    "ExitRecovery(address)": EventFragment;
    "InitiateRecovery(address,uint256)": EventFragment;
    "SetRouter(uint32,bytes32,bytes32)": EventFragment;
    "TransferGovernor(uint32,uint32,address,address)": EventFragment;
    "TransferRecoveryManager(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BatchExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BatchReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExitRecovery"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InitiateRecovery"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetRouter"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferGovernor"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferRecoveryManager"): EventFragment;
}

export interface BatchExecutedEventObject {
  batchHash: string;
}
export type BatchExecutedEvent = TypedEvent<[string], BatchExecutedEventObject>;

export type BatchExecutedEventFilter = TypedEventFilter<BatchExecutedEvent>;

export interface BatchReceivedEventObject {
  batchHash: string;
}
export type BatchReceivedEvent = TypedEvent<[string], BatchReceivedEventObject>;

export type BatchReceivedEventFilter = TypedEventFilter<BatchReceivedEvent>;

export interface ExitRecoveryEventObject {
  recoveryManager: string;
}
export type ExitRecoveryEvent = TypedEvent<[string], ExitRecoveryEventObject>;

export type ExitRecoveryEventFilter = TypedEventFilter<ExitRecoveryEvent>;

export interface InitiateRecoveryEventObject {
  recoveryManager: string;
  recoveryActiveAt: BigNumber;
}
export type InitiateRecoveryEvent = TypedEvent<
  [string, BigNumber],
  InitiateRecoveryEventObject
>;

export type InitiateRecoveryEventFilter =
  TypedEventFilter<InitiateRecoveryEvent>;

export interface SetRouterEventObject {
  domain: number;
  previousRouter: string;
  newRouter: string;
}
export type SetRouterEvent = TypedEvent<
  [number, string, string],
  SetRouterEventObject
>;

export type SetRouterEventFilter = TypedEventFilter<SetRouterEvent>;

export interface TransferGovernorEventObject {
  previousGovernorDomain: number;
  newGovernorDomain: number;
  previousGovernor: string;
  newGovernor: string;
}
export type TransferGovernorEvent = TypedEvent<
  [number, number, string, string],
  TransferGovernorEventObject
>;

export type TransferGovernorEventFilter =
  TypedEventFilter<TransferGovernorEvent>;

export interface TransferRecoveryManagerEventObject {
  previousRecoveryManager: string;
  newRecoveryManager: string;
}
export type TransferRecoveryManagerEvent = TypedEvent<
  [string, string],
  TransferRecoveryManagerEventObject
>;

export type TransferRecoveryManagerEventFilter =
  TypedEventFilter<TransferRecoveryManagerEvent>;

export interface GovernanceRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GovernanceRouterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    VERSION(overrides?: CallOverrides): Promise<[number]>;

    domains(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    executeCallBatch(
      _calls: GovernanceMessage.CallStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeGovernanceActions(
      _localCalls: GovernanceMessage.CallStruct[],
      _domains: PromiseOrValue<BigNumberish>[],
      _remoteCalls: GovernanceMessage.CallStruct[][],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exitRecovery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    governor(overrides?: CallOverrides): Promise<[string]>;

    governorDomain(overrides?: CallOverrides): Promise<[number]>;

    handle(
      _origin: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<BytesLike>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    inRecovery(overrides?: CallOverrides): Promise<[boolean]>;

    inboundCallBatches(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    initialize(
      _xAppConnectionManager: PromiseOrValue<string>,
      _recoveryManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initiateRecoveryTimelock(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    localDomain(overrides?: CallOverrides): Promise<[number]>;

    recoveryActiveAt(overrides?: CallOverrides): Promise<[BigNumber]>;

    recoveryManager(overrides?: CallOverrides): Promise<[string]>;

    recoveryTimelock(overrides?: CallOverrides): Promise<[BigNumber]>;

    routers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setRouterGlobal(
      _domain: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRouterLocal(
      _domain: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setXAppConnectionManager(
      _xAppConnectionManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferGovernor(
      _newDomain: PromiseOrValue<BigNumberish>,
      _newGovernor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferRecoveryManager(
      _newRecoveryManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<[string]>;
  };

  VERSION(overrides?: CallOverrides): Promise<number>;

  domains(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  executeCallBatch(
    _calls: GovernanceMessage.CallStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeGovernanceActions(
    _localCalls: GovernanceMessage.CallStruct[],
    _domains: PromiseOrValue<BigNumberish>[],
    _remoteCalls: GovernanceMessage.CallStruct[][],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exitRecovery(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  governor(overrides?: CallOverrides): Promise<string>;

  governorDomain(overrides?: CallOverrides): Promise<number>;

  handle(
    _origin: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    _sender: PromiseOrValue<BytesLike>,
    _message: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  inRecovery(overrides?: CallOverrides): Promise<boolean>;

  inboundCallBatches(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<number>;

  initialize(
    _xAppConnectionManager: PromiseOrValue<string>,
    _recoveryManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initiateRecoveryTimelock(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  localDomain(overrides?: CallOverrides): Promise<number>;

  recoveryActiveAt(overrides?: CallOverrides): Promise<BigNumber>;

  recoveryManager(overrides?: CallOverrides): Promise<string>;

  recoveryTimelock(overrides?: CallOverrides): Promise<BigNumber>;

  routers(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  setRouterGlobal(
    _domain: PromiseOrValue<BigNumberish>,
    _router: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRouterLocal(
    _domain: PromiseOrValue<BigNumberish>,
    _router: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setXAppConnectionManager(
    _xAppConnectionManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferGovernor(
    _newDomain: PromiseOrValue<BigNumberish>,
    _newGovernor: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferRecoveryManager(
    _newRecoveryManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  xAppConnectionManager(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    VERSION(overrides?: CallOverrides): Promise<number>;

    domains(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    executeCallBatch(
      _calls: GovernanceMessage.CallStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    executeGovernanceActions(
      _localCalls: GovernanceMessage.CallStruct[],
      _domains: PromiseOrValue<BigNumberish>[],
      _remoteCalls: GovernanceMessage.CallStruct[][],
      overrides?: CallOverrides
    ): Promise<void>;

    exitRecovery(overrides?: CallOverrides): Promise<void>;

    governor(overrides?: CallOverrides): Promise<string>;

    governorDomain(overrides?: CallOverrides): Promise<number>;

    handle(
      _origin: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<BytesLike>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    inRecovery(overrides?: CallOverrides): Promise<boolean>;

    inboundCallBatches(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<number>;

    initialize(
      _xAppConnectionManager: PromiseOrValue<string>,
      _recoveryManager: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    initiateRecoveryTimelock(overrides?: CallOverrides): Promise<void>;

    localDomain(overrides?: CallOverrides): Promise<number>;

    recoveryActiveAt(overrides?: CallOverrides): Promise<BigNumber>;

    recoveryManager(overrides?: CallOverrides): Promise<string>;

    recoveryTimelock(overrides?: CallOverrides): Promise<BigNumber>;

    routers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    setRouterGlobal(
      _domain: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRouterLocal(
      _domain: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setXAppConnectionManager(
      _xAppConnectionManager: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferGovernor(
      _newDomain: PromiseOrValue<BigNumberish>,
      _newGovernor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferRecoveryManager(
      _newRecoveryManager: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "BatchExecuted(bytes32)"(
      batchHash?: PromiseOrValue<BytesLike> | null
    ): BatchExecutedEventFilter;
    BatchExecuted(
      batchHash?: PromiseOrValue<BytesLike> | null
    ): BatchExecutedEventFilter;

    "BatchReceived(bytes32)"(
      batchHash?: PromiseOrValue<BytesLike> | null
    ): BatchReceivedEventFilter;
    BatchReceived(
      batchHash?: PromiseOrValue<BytesLike> | null
    ): BatchReceivedEventFilter;

    "ExitRecovery(address)"(recoveryManager?: null): ExitRecoveryEventFilter;
    ExitRecovery(recoveryManager?: null): ExitRecoveryEventFilter;

    "InitiateRecovery(address,uint256)"(
      recoveryManager?: PromiseOrValue<string> | null,
      recoveryActiveAt?: null
    ): InitiateRecoveryEventFilter;
    InitiateRecovery(
      recoveryManager?: PromiseOrValue<string> | null,
      recoveryActiveAt?: null
    ): InitiateRecoveryEventFilter;

    "SetRouter(uint32,bytes32,bytes32)"(
      domain?: PromiseOrValue<BigNumberish> | null,
      previousRouter?: null,
      newRouter?: null
    ): SetRouterEventFilter;
    SetRouter(
      domain?: PromiseOrValue<BigNumberish> | null,
      previousRouter?: null,
      newRouter?: null
    ): SetRouterEventFilter;

    "TransferGovernor(uint32,uint32,address,address)"(
      previousGovernorDomain?: null,
      newGovernorDomain?: null,
      previousGovernor?: PromiseOrValue<string> | null,
      newGovernor?: PromiseOrValue<string> | null
    ): TransferGovernorEventFilter;
    TransferGovernor(
      previousGovernorDomain?: null,
      newGovernorDomain?: null,
      previousGovernor?: PromiseOrValue<string> | null,
      newGovernor?: PromiseOrValue<string> | null
    ): TransferGovernorEventFilter;

    "TransferRecoveryManager(address,address)"(
      previousRecoveryManager?: PromiseOrValue<string> | null,
      newRecoveryManager?: PromiseOrValue<string> | null
    ): TransferRecoveryManagerEventFilter;
    TransferRecoveryManager(
      previousRecoveryManager?: PromiseOrValue<string> | null,
      newRecoveryManager?: PromiseOrValue<string> | null
    ): TransferRecoveryManagerEventFilter;
  };

  estimateGas: {
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    domains(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeCallBatch(
      _calls: GovernanceMessage.CallStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeGovernanceActions(
      _localCalls: GovernanceMessage.CallStruct[],
      _domains: PromiseOrValue<BigNumberish>[],
      _remoteCalls: GovernanceMessage.CallStruct[][],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exitRecovery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    governorDomain(overrides?: CallOverrides): Promise<BigNumber>;

    handle(
      _origin: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<BytesLike>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    inRecovery(overrides?: CallOverrides): Promise<BigNumber>;

    inboundCallBatches(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _xAppConnectionManager: PromiseOrValue<string>,
      _recoveryManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initiateRecoveryTimelock(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    localDomain(overrides?: CallOverrides): Promise<BigNumber>;

    recoveryActiveAt(overrides?: CallOverrides): Promise<BigNumber>;

    recoveryManager(overrides?: CallOverrides): Promise<BigNumber>;

    recoveryTimelock(overrides?: CallOverrides): Promise<BigNumber>;

    routers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setRouterGlobal(
      _domain: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRouterLocal(
      _domain: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setXAppConnectionManager(
      _xAppConnectionManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferGovernor(
      _newDomain: PromiseOrValue<BigNumberish>,
      _newGovernor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferRecoveryManager(
      _newRecoveryManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    domains(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeCallBatch(
      _calls: GovernanceMessage.CallStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeGovernanceActions(
      _localCalls: GovernanceMessage.CallStruct[],
      _domains: PromiseOrValue<BigNumberish>[],
      _remoteCalls: GovernanceMessage.CallStruct[][],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exitRecovery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governorDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    handle(
      _origin: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<BytesLike>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    inRecovery(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    inboundCallBatches(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _xAppConnectionManager: PromiseOrValue<string>,
      _recoveryManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initiateRecoveryTimelock(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    localDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoveryActiveAt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoveryManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoveryTimelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    routers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setRouterGlobal(
      _domain: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRouterLocal(
      _domain: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setXAppConnectionManager(
      _xAppConnectionManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferGovernor(
      _newDomain: PromiseOrValue<BigNumberish>,
      _newGovernor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferRecoveryManager(
      _newRecoveryManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    xAppConnectionManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}