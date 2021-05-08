pragma solidity ^0.8.4;

import "../lib/mortal.sol";

contract Voting is mortal {
  mapping (bytes32 => uint8) public votesReceived;

  bytes32[] public candidateList;

  constructor(bytes32[] memory candidateNames) {
    candidateList = candidateNames;
  }

  function getCandidateList() public view returns (bytes32[] memory) {
    return candidateList;
  }

  function getCandidateListLength() public view returns (uint) {
    return candidateList.length;
  }

  function totalVotesFor(bytes32 candidate) public view returns (uint8) {
    require(validCandidate(candidate));
    return votesReceived[candidate];
  }

  function voteForCandidate(bytes32 candidate) public {
    require(validCandidate(candidate));
    votesReceived[candidate] += 1;
  }

  function validCandidate(bytes32 candidate) public view returns (bool) {
    for(uint i = 0; i < candidateList.length; i++) {
      if (candidateList[i] == candidate) {
        return true;
      }
    }
    return false;
  }
}