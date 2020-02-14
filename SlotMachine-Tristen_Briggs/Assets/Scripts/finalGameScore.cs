using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class finalGameScore : MonoBehaviour
{

    public static int scoreValue = 0;
    Text finalScore;

    // Start is called before the first frame update
    void Start()
    {
        finalScore = GetComponent<Text>();
    }

    // Update is called once per frame
    void Update()
    {
        finalScore.text = "Your final score was: " + scoreValue;
    }
}

