import threading
import datetime
from datetime import datetime as dt
import sys

def do_every(interval, worker_func, iterations = 0):
    if iterations != 1:
        threading.Timer (
        interval,
        do_every, [interval, worker_func, 0 if iterations == 0 else iterations-1]
    ).start()

    worker_func()

def utcNow():
    now = dt.utcnow()
    return now

def testPrint():
    print utcNow()


def getTriggertime(nowDateTime, addSeconds):
    newTime = nowDateTime + datetime.timedelta(0, addSeconds)
    newTime = newTime.replace(microsecond=0)
    return newTime


mineRequest = raw_input("Make a request: ")

def startMining(mineRequest, timeInterval):
