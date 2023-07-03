// This function will return n terms of the Fibonacci sequence

export default function FibIterative (num: number) :number[] {
    let sequence = [0, 1];
    
    if (num <= 0) return sequence;
    else if (num == 1) {
        sequence.push(1);
        return sequence;
    }

    while (sequence.length < num) {
        let next_num = sequence[sequence.length-1] + sequence[sequence.length-2];
        sequence.push(next_num);
    }
    
    return sequence; 
}
